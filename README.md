## Journey: Your Trip Planner

### Table of Contents:
* [About](#about-journey)
* [Usage](#how-it-works)
* [Technology](#technologies-used)
* [Upcoming](#plans-for-phase-2-dev)
* [Installing](#install-instructions)
* [License](#license)

### About Journey:

Carve your path. Create your journey.

<div align="center">
    <img src="/readme/journey-login.PNG" alt="Journey" width="530"/>
</div>

Journey is a simple resource to help you plan your next trip whether you know where to go or not.

### How it works:

* Sign up to create your account. Each user is stored securely in MongoDB Atlas with an encrypted password.
<div align="center">
    <img src="/readme/journey-signup.PNG" alt="Journey Signup Page" width="530"/>
</div>
* Create your first trip; it's okay if you don't know where to go.
<div align="center">
    <img src="/readme/journey-home.PNG" alt="Journey Home" width="530"/>
</div>
* Answer all questions - yes, "I don't know" is a valid answer for most of these!
<div align="center">
    <img src="/readme/journey-idk.PNG" alt="Journey New Trip" width="530"/>
</div>
* Get your results
<div align="center">
    <img src="/readme/journey-results1.PNG" alt="Journey Results" width="530"/><br />
    <img src="/readme/journey-results2.PNG" alt="Journey Results" width="530"/><br />
    <img src="/readme/journey-results3.PNG" alt="Journey Results" width="530"/><br />
</div>
* Export your results into a PDF to take with you on the go
* Access your past trips after logging in
<div align="center">
    <img src="/readme/journey-pasttrips.PNG" alt="Journey Past Trips Page" width="530"/>
</div>
* Edit your username and password through the settings tab
<div align="center">
    <img src="/readme/journey-settings.PNG" alt="Journey Settings" width="530"/>
</div>

### Technologies Used:
* MongoDB Atlas
* MongoDB
* Google Places Autocomplete API
* Bcrypt


### Plans for Phase 2 Dev:
* Implementing 'Forgot Password' function
* Sound effects over hover of buttons
* Linking out to each Google Place location
* Checking flights and/or directions
* Saving Google Place and Places to Stay to User in DB


## Install Instructions:
npm start <br>

## License:

![license](https://img.shields.io/badge/license-MIT-green)

MIT License

Copyright (c) [2020] [Logan Hemphill, Nicole O'Bomsawin]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
