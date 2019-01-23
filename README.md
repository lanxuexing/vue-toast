## vue-toast

### Install

`npm install vue-toast --save`


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
import VueToast from 'vue-toast';

// register plugin on vue
Vue.use(VueToast)

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
cd ./vue-toast
npm install
```
