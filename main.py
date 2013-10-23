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

import jinja2
import os

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


app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/vwo1', VWO1Handler),
    ('/vwo2', VWO2Handler),
    ('/clickHandler', ClickHandler),
    ('/log', LogResults),
], debug=True)
