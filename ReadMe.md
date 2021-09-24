
    
PUPPYFY

In 2020, up to 286.000 dogs and cats were abandoned. Many of them were picked up by the protectors, but they still can't cope.
Puppyfy is a community in which you will meet people with your concerns and will access to the best services and first-hand information about animals that need to be adopted


MVP

1.- The first thing you will see visiting the app is the home page and some information about Puppyfy
2.- Puppyfy have three sections: ADOPT, PUPPYCARE and VETERINARIES
3.- The App has a section for sign-up and login. You only can adpot a puppy if you are logged
This section has the possibility of,
    - **Creating** the account trough the *sign-up form*
    - Once you are logged, you can see your profile and **edit** the data with the *profile-edition* view or **delete** it
    - You can also see a **list of profiles** (the people who takes part in our community)
  
4.- ADOPT brand CRUD
    - we have a **list of all the pets** to adpt
    - we have a *Giving Form*  if you want to give your Puppy in adoption
    - we have a *form-adoption* (**create**) to adopt a Puppy which gives you a *print* of all the information
    - you can **delete** the form if you don´t finally adopt
  
5.- SERVICES brand CRUD. Services includes Puppy Care (hairdressers, puppytrainers and puppysitters) and veterinary, although they have different views
    - we have a **list of all the services**  and a *list of all the veterinaries*
    - we have the *parters-form* (**create**) for all the services that want to join us 
    - There is the possibility, through the *parters-edition* to update (**edit**) all the data if you are the owner of the account that created the service.
    - Also, the one who created the service can **delete** it if he wants
  
DATA STRUCTURE

MODELS
- Adoption.model.js
- Puppy.model.js
- Service.model.js
- User.model.js

ROUTES
- profile.routes.js
- puppies.routes.js
- service.routes.js
- user.routes.js

VIEWS

- GENERAL VIEWS
    - home.hbs
    - index.hbs
    - layout.hbs
    - not-found.hbs
    - about-us.hbs
    - error.hbs
  
- ADOPT VIEWS
    - adoption-form.hbs
    - adoption-print.hbs
    - catlist.hbs
    - doglist.hbs
    - give-form.hbs
    - give-print.hbs
    - give-update-form.hbs
    - list.hbs
    - otherlist.hbs
  
- PROFILE VIEWS
    - profile-edition.hbs
    - profile.hbs
    - profiles-list.hbs
  
- SERVICES VIEWS
    - hairdressers.hbs
    - list.hbs
    - partmers-edition.hbs
    - partners-form.hbs
    - puppy-sitters.hbs
    - puppy-trainers.hbs
    - veterinary.hbs

- USER VIEWS
    - login.hbs
    - sign-up.hbs

    


