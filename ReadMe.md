
PUPPYFY

In 2020, up to 286.000 dogs and cats were abandoned. Many of them were picked up by the protectors, but they still can't cope.
Puppyfy is a community in which you will meet people with your concerns and will access to the best services and first-hand information about animals that need to be adopted

**USER STORIES**
- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault.
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **sign-up** - As a user I want to see a welcome page that gives me the option to either log in as an existing user, or sign up with a new account.
- **create signup** - As a user I want to sign up with my basic information so that I can safely adpt or give in adoption my puppies.
- **edit and delete profile** - as a user I want my space where I can edit or delete my profile.
- **profiles** - as a user I want to see the profiles of the other users of puppyfy. I want to see by whom is it formed the puppyfy community.
- **homepage** - As a user I want to see information about puppyfy and being  able to either search for an adoption, a service of puppycare, a veterinary or give in adoption my puppy.
- **adopt** -  As a user I want to see the search results with an overview image, the image, name, date of birth, colour, family options and comments about the puupies I can adopt. Also, I want to have access to de adoption form or to home if I don’t want to see that search anymore.
- **adoption form** - As a user I want to see the information about the puppy I have chosen and being able to confirm it in the next step. Also I appreciate the reminder of being logged in to be able to adopt.
- **adoption form-print** - As a user I want to have all the data of the puppy chosen and being able to print it or reject it
- **puppy care** -As a user I want to have an overview of the services from which I can obtain information and being able to access from the respective button. Also, I want to be able to back to homepage if I am not interested in.
  As a service I can upload my information and be present in puppyfy platform
- **partners form** - As a partner I want to be able to upload my information or back to home if I have changed my mind
- **partners edition** - As a partner, once uploaded my information, I want to be able to edit or delete it.
- **puppy care service** - As a user I want to see the search results with an overview image, all the data of each one of the services. The image, the name of the professional, the adress and the contact number. Also I want to be able to return to homepage If I don´t want any service
- **veterinary** - As a user I want to see the search results with an overview image, all the data of the veterinaries available. The image, the name of the professional, the adress and the contact number. Also I want to be able to return to homepage If I don´t want any service
- **Logout** - As I user, when I am logged in, I want to be able to logout of my profile

**API routes (back-end)**
GET /
    renders homepage

GET /user/signup
    renders user/signup.hbs

POST /user/signup
    redirects to user/login
        body:
            username
            mail
            password 

GET /user/login
    renders /user/login.hbs

POST /user/login
    redirects to /profile/:userId
        body:
            username
            password 

GET /profile/:userId
renders profile/profile.hbs

POST /profile/:userId/profile-edition
    redirects to (if user is logged in) /profile/profile-edition.hbs
        body:
            Profile photo
            Username
            Email
            Full Name
            Date of birth
            Sex
            Adress
            Phone
            Job
            Family structure
            comments


GET /profile/profiles-list
    renders profile/profiles-list.hbs

