#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import webapp2
from google.appengine.ext import ndb
import MySQLdb

import jinja2
import os

import json


jinja_environment = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)))

class Account(ndb.Model):
  clicked = ndb.IntegerProperty()
  date = ndb.DateTimeProperty(auto_now_add=True)

class MainHandler(webapp2.RequestHandler):
  def get(self):
    template_values= {}
    template = jinja_environment.get_template('index.html')
    self.response.out.write(template.render(template_values))

class ClickHandler(webapp2.RequestHandler):
    def get(self):
      accnt_hash = self.request.get('accnt_hash')
      account = Account.get_by_id(accnt_hash)
      
      if account and account.clicked == 1:
          self.response.headers['Content-Type'] = 'image/jpeg'
          fh = open('clicked-here-button.jpg')
          self.response.out.write(fh.read())
      else:
          self.response.headers['Content-Type'] = 'image/jpeg'
          fh = open('click-here-button.jpg')
          self.response.out.write(fh.read())

class LogResults(webapp2.RequestHandler):
    def get(self):
        accnt_hash = self.request.get('accnt_hash')
        account = Account.get_by_id(accnt_hash)
        
        if account:
          click_state = -account.clicked + 1
          account = Account(id = accnt_hash, clicked = click_state)
        else:
          account = Account(id = accnt_hash, clicked = 1)

        account.put()
        self.redirect("http://www.google.com/adwords/")


class VWOConfigHandler(webapp2.RequestHandler):
  def get(self):
    template_values= {}
    template = jinja_environment.get_template('config.html')
    self.response.out.write(template.render(template_values))

class VWO1Handler(webapp2.RequestHandler):
  def get(self):
    template_values= {}
    template = jinja_environment.get_template('vwo1.html')
    self.response.out.write(template.render(template_values))

class VWO2Handler(webapp2.RequestHandler):
  def get(self):
    template_values= {}
    template = jinja_environment.get_template('vwo2.html')
    self.response.out.write(template.render(template_values))

class OPT1Handler(webapp2.RequestHandler):
  def get(self):
    template_values= {}
    template = jinja_environment.get_template('opt1.html')
    self.response.out.write(template.render(template_values))

class OPT2Handler(webapp2.RequestHandler):
  def get(self):
    template_values= {}
    template = jinja_environment.get_template('opt2.html')
    self.response.out.write(template.render(template_values))

class VideoRequests(webapp2.RequestHandler):
    def get(self):
        campaign_id = self.request.get('campaign_id', default_value='')
        video_request_id = self.request.get('video_request_id', default_value='')
        video_id = self.request.get('video_id', default_value='')

        if campaign_id and video_request_id and video_id:
        
          if (os.getenv('SERVER_SOFTWARE') and
            os.getenv('SERVER_SOFTWARE').startswith('Google App Engine/')):
            db = MySQLdb.connect(unix_socket='/cloudsql/next-click:idomoo', db='idomoo', user='root')
          else:
            db = MySQLdb.connect('173.194.104.195', 'root', 'qaz789', 'idomoo')

          cursor = db.cursor()
          

          cursor.execute('INSERT INTO videos (campaign_id, video_request_id, video_id) VALUES (%s, %s, %s)', (campaign_id, video_request_id, video_id))
          db.commit()
          db.close()

          status = 'success'
        else:
          status = "error"


        template_values= {
                          'status': status, 
                          'values': {
                                     'campaign_id': campaign_id, 
                                     'video_request_id': video_request_id, 
                                     'video_id': video_id
                                     }
                          }
        

        self.response.headers['Content-Type'] = 'application/json'   
        self.response.out.write(json.dumps(template_values))
        


app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/vwo1', VWO1Handler),
    ('/vwo2', VWO2Handler),
    ('/opt1', OPT1Handler),
    ('/opt2', OPT2Handler),
    ('/video_requests', VideoRequests),
    ('/clickHandler', ClickHandler),
    ('/config', VWOConfigHandler),
    ('/log', LogResults),
], debug=True)
