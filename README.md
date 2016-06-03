### Foursquare Venue Search App

 This little app allows you to enter your GPS co-ordinates and find local venues of interest along with some general information about them - their photos(if any), tips/reviews, and whether or not they are currently open(if applicable).

 The app uses the foursquare API for the data source. Angular as the javascript framework and karma and jasmine for testing.

 To try this app out please follow the steps below:

  1. fork the repo.
  2. clone it down to your machine.
  3. run ```$npm install```

N.B this app uses dotenv package to keep credentials safe.
once you have cloned the repo be sure to add you auth_token/access_token in a file called .env (place this file in the root folder).

inside ./.env    
```ACCESS_TOKEN = YOUR_ACCESS_TOKEN_HERE```

once you have done this the .dotenv npm package will handle the rest.
(be sure to keep you credentials safe by placing this .env in your .gitignore file)
