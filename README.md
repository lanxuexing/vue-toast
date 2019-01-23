## vue2toast[![npm version](https://badge.fury.io/js/%40lanxuexing%2Fvue2toast.svg)](https://badge.fury.io/js/%40lanxuexing%2Fvue2toast)

### Install

`npm i @lanxuexing/vue2toast --save`


### Settings

Name                | Default                  |  Type    | Description
--------------------|--------------------------|----------|---------------------------
duration            | 200                      | Number   | The duration of the toast
callback            | null                     | Number   | The callback of the toast

### Usage

There are two different ways to manage a Toast.

##### **Calling api**

```javascript
// import plugin
import Vue2Toast from '@lanxuexing/vue2toast';

// register plugin on vue
Vue.use(Vue2Toast)

// add a toast on screen
this.$toast.show("Hello, Toast");

// you can manually hide the toast, or it will automatically disappear after a `duration` ms timeout.
this.$toast.show("Hello, Toast", {
  duration: 500
});

// you can add callback functions after toast display is complete
this.$toast.show("Hello, Toast", function() {
    // do anything
});

```

### Run example:

```
cd ./vue2toast
npm install
```
