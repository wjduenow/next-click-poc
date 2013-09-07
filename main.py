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

class Account(ndb.Model):
  clicked = ndb.IntegerProperty()
  date = ndb.DateTimeProperty(auto_now_add=True)

class MainHandler(webapp2.RequestHandler):
    def get(self):
    	accnt_hash = self.request.get('accnt_hash')
    	account = Account.get_by_id(accnt_hash)
    	
    	if account:
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
        account = Account(id = accnt_hash, clicked = 1)
        account.put()
        self.redirect("http://www.google.com/adwords/")
  	

app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/log', LogResults),
], debug=True)
