# Cristian Lopez

<p style="text-align: center;"><img src="https://i.ibb.co/WPHMbf2/Screenshot-2023-03-31-at-11-56-48-AM.png" width="200"></p>

## Screens

<img src="https://i.ibb.co/VpK2QZ3/Screenshot-2023-05-25-at-4-26-38-PM.png" width="300">
<img src="https://i.ibb.co/SJHBws4/Screenshot-2023-05-25-at-4-26-45-PM.png" width="300">
<img src="https://i.ibb.co/3rS1kBs/Screenshot-2023-05-25-at-4-27-15-PM.png" width="300">
<img src="https://i.ibb.co/fSn57QW/Screenshot-2023-05-25-at-4-27-22-PM.png" width="300">
<img src="https://i.ibb.co/rvcb4LP/Screenshot-2023-05-25-at-4-27-30-PM.png" width="300">
<img src="https://i.ibb.co/zhkGkQR/Screenshot-2023-05-25-at-4-27-36-PM.png" width="300">

## Description

This project shows the information about the bicycles and to be able to rent them.
The project has the following characteristics:

- registration and login
- house with bike list
- list of rented bikes
- user screen

## Project Structure

```
project
│   README.md
└───src
   |---core
        |---adapters
        |---di
        |---domain
        |---framework
        |---hooks
        |---services
   |---mobile
        |---context
        |---mobile-ui
        |---navigation
        |---pages
   └───shared

```

## architecture explanation

This architecture in a React Native project is organized into two main sections: "core" and "mobile".

In "core", you can find the folders "adapters", "di", "domain", "framework", "hooks", and "services". In "adapters", you can find adapters to integrate with different external services. In "di", you can find the files related to dependency injection. In "domain", you can find the business logic. In "framework", you can find the tools offered by React Native to build the application. In "hooks", you can find custom hooks. In "services", you can find the files related to communication with the backend.

In "mobile", you can find the folders "context", "mobile-ui", "navigation", and "pages". In "context", you can find the application contexts. In "mobile-ui", you can find custom components for the user interface. In "navigation", you can find the application navigation configuration. In "pages", you can find the different screens of the application.

Finally, there is the "shared" folder that contains files that can be shared between the different sections of the application.

this architecture in a React Native project follows the pattern of separation of responsibilities and aims to have a high degree of modularity to facilitate project maintenance and scalability.

<p style="text-align: center;"><img src="https://camo.githubusercontent.com/5d0631fa88e7d5054f6e98665ac659773bc98aaeef5fb6167705021f1f050d96/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f76322f726573697a653a6669743a343830302f666f726d61743a776562702f312a4e66467a49375a2d453379706e386168455362447a772e706e67" width="400"></p>

## stack

Project is created using `Typescript, yarn, jotai, useQuery, Eslint, prettier, clean code, firebase, test`

## Dependencies

- Node.JS
- Java
- Yarn
- Cocoapods
- XCode
- Android Studio

## First Steps

You should follow the steep to configure environment of (https://reactnative.dev/docs/environment-setup)

After that use `yarn install`
After that use `cd ios` `pod install`

## Generic Comands

- Mobile
  - `yarn run ios`
  - `yarn run android`

## Documentation

- [yarn](https://classic.yarnpkg.com)
- [React Native](https://reactnative.dev)
