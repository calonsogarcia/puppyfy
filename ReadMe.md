PUPPYFY

In 2020, up to 286.000 dogs and cats were abandoned. Many of them were picked up by the protectors, but they still can’t cope.
Puppyfy is a community in which you will meet people with your concerns and will access to the best services and first-hand information about animals that need to be adopted

**USER STORIES**
- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault.
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **Sign-up** - As a user I want to see a welcome page that gives me the option to either log in as an existing user, or sign up with a new account.
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
    renders index.hbs

GET /home
    renders home.hbs

GET /about-us
    renders about-us.hbs

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

GET /adopt
    renders list.hbs

GET /adopt/dogs
    renders adopt/dogList.hbs

GET /adopt/cats
    renders adopt/catList.hbs

GET /adopt/other-puppies
    renders adopt/otherList.hbs

GET /adopt/:puppyId/adoption-form
    renders adopt/adoption-form.hbs

POST /adopt/:puppyId/adoption-form
    redirects to adopt/:puupyId/adoption-print
        body:
            Name
            Type of animal
            Date of Birth
            Sex
            Breed
            Colour
            Family options
            Photo
            Comments
GET /adopt/:puppyId/adoption-print
    renders adopt/adoption-print.hbs

GET /adopt/give-in-adoption
    renders adopt/give-form.hbs

POST/adopt/give-in-adoption
    (if user is not logged in)redirects to adopt/puppy-care/give-in-adoption
    (if user is logged-in)
    redirects to /adopt/:puppyId/give-in-adoption/print

GET /adopt/:puppyId/give-in-adoption/print
    renders adopt/give-print.hbs

GET /:puppyId/give-in-adoption/update
    renders adopt/give-update-form.hbs

POST /:puppyId/give-in-adoption/update
    redirects to /adopt/:puppyId/give-in-adoption/print

GET /puppy-care
    renders /services/list.hbs

GET /puppy-care/hairdressers
    renders /services/hairdressers.hbs

GET /puppy-care/puppy-sitters
    renders /services/puppy-sitters.hbs

GET /puppy-care/puppy-trainers
    renders /services/puppy-trainers.hbs

GET /puppy-care/veterinaries
    renders /services/veterinaries.hbs

GET /puppy-care/partners-form
    renders /services/partners-form.hbs

POST  /puppy-care/partners-form
    redirects (if user is logged in) to /home
    redirects (if user is not logged in) to /puppy-care/partners-form
    body:
        Name
        ServiceType
        Adress
        Contact
        Image

GET /puppy-care/:serviceId/partners-edition
    renders services/partners-edition.hbs

POST /puppy-care/:serviceId/partners-edition
    redirects to /puppy-care/partners-form

**MODELS**
User model: new Schema({
        username: {
            type: String,
            unique: true,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true,
        },
        fullName: String,
        dateOfBirth: Number,
        sex: {
            type: String,
            enum: [“Female”, “Male”],
        },
        address: String,
        phone: String,
        job: String,
        familyStructure: String,
        userImage: {
            type: String,
            default: ‘https://png.pngtree.com/png-vector/20190909/ourmid/pngtree-outline-user-icon-png-image_1727916.jpg’
        },
        comments: String,
    },
    {
        timestamps: true,
    }
);

Puppy model: new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: “User”,
    },
    puppyType: {
        type: String,
        required: true,
        enum: [“Dog”, “Cat”, “Other”],
    },
    name: String,
    birthDate: String,
    sex: {
        type: String,
        required: true,
        enum: [“Female”, “Male”],
    },
    breed: String,
    colour: String,
    familyOptions: String,
    image: {
        type: String,
        default: ‘https://png.pngtree.com/png-vector/20190909/ourmid/pngtree-outline-user-icon-png-image_1727916.jpg’
    },
    comments: String,
}, {
    timestamps: true,
});

Service model: new Schema ({
        serviceType: {
            type: String,
            required: true,
            enum: [‘PuppySitter’, ‘Hairdresser’, “PuppyTrainer”, “Veterinary”],
        },
        user_id: {
            type: Schema.Types.ObjectId,
            ref: “User”,
        },
        name: String,
        address: String,
        contact: String,
        image: {
            type: String,
            default: ‘https://png.pngtree.com/png-vector/20190909/ourmid/pngtree-outline-user-icon-png-image_1727916.jpg’
        }
    },
    {
        timestamps: true,
    }
);

Adoption model  new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: “User”,
    },
    puppy_id: {
        type: Schema.Types.ObjectId,
        ref: “Puppy”,
    },
}, {
    timestamps: true,
});

**BACKLOG**
List of other features outside of the MVPs scope:
Geolocation fore puppy-care services and veterinaries when showing the list of them and their respective maps.
Profile
Show inside the profile of the user the list of puppies adopted and services
Profile, adopt, services
fit images to show them with the same size
...



Puppy new Schema({
        user_id: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        puppyType: {
            type: String,
            required: true,
            enum: ["Dog", "Cat", "Other"],
        },
        name: String,
        birthDate: String,
        sex: {
            type: String,
            required: true,
            enum: ["Female", "Male"],
        },
        breed: String,
        colour: String,
        familyOptions: String,
        image: {
            type: String,
            default: 'https://png.pngtree.com/png-vector/20190909/ourmid/pngtree-outline-user-icon-png-image_1727916.jpg'
        },
        comments: String,
    }, {
        timestamps: true,
    });

Service new Schema ({
      serviceType: {
          type: String,
          required: true,
          enum: ['PuppySitter', 'Hairdresser', "PuppyTrainer", "Veterinary"],
      },
      user_id: {
          type: Schema.Types.ObjectId,
          ref: "User",
      },
      name: String,
      address: String,
      contact: String,
      image: {
          type: String,
          default: 'https://png.pngtree.com/png-vector/20190909/ourmid/pngtree-outline-user-icon-png-image_1727916.jpg'
      }},
      {
      timestamps: true,
      }
      );

Adoption model  new Schema({
        user_id: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        puppy_id: {
            type: Schema.Types.ObjectId,
            ref: "Puppy",
        },
    }, {
        timestamps: true,
    });

**BACKLOG**

List of other features outside of the MVPs scope

Geolocation fore puppy-care services and veterinaries when showing the list of them and their respective maps.

Profile
Show inside the profile of the user the list of puppies adopted and services

Profile, adopt, services
fit images to show them with the same size

...


**LINKS**

- [Repository](https://github.com/calonsogarcia/puppyfy.git) 
  
- [Deploy](https://puppyfy-lovers.herokuapp.com)

- [Prework slides](https://docs.google.com/presentation/d/1i8V07ejXQkYsXlFxvF4lmfWR2QwiZxJySqrv5EzJQhU/edit?usp=sharing) 
  
- [Presentation slides](https://docs.google.com/presentation/d/1JfHtWnKB3mvnpeHKJlfWQdFs6rCyH4wiHI6L_kvLLX4/edit?usp=sharing)
