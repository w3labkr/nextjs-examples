# Firebase

Firebase provides the tools and infrastructure you need to develop, grow, and earn money from your app.

## Firebase SDK

```shell
npm install firebase firebase-admin
```

```shell
npm install -g firebase-tools
```

```shell
firebase init
```

## Firestore

Edit `firebase.json`:

```json
{
    "firestore": {
        "rules": "firestore.rules",
        "indexes": "firestore.indexes.json"
    }
}
```

Edit `firestore.rules`:

```javascript
service cloud.firestore {
    ...
    allow read, write: if true;
    ...
}
```

## Storage

Edit `firebase.json`:

```json
{
    "storage": {
        "rules": "storage.rules"
    }
}
```

Edit `storage.rules`:

```javascript
service firebase.storage {
    ...
    allow read, write: if true;
    ...
}
```

## emulator

```shell
firebase init emulators
```

```shell
firebase emulators:start
```

View Emulator UI at <http://127.0.0.1:4000/>

## deploy

```shell
firebase init hosting
```

```shell
firebase deploy
```

## Reference

Get started with Firebase

- [Add Firebase to your JavaScript project](https://firebase.google.com/docs/web/setup?authuser=0)
- [Available Firebase services for web](https://firebase.google.com/docs/web/setup?authuser=0#available-libraries)

Manage your Firebase projects

- [Select locations for your project](https://firebase.google.com/docs/projects/locations?authuser=0)

Error Code

- [AuthErrorCodes](https://firebase.google.com/docs/reference/js/auth#autherrorcodes)
- [StorageErrorCode](https://firebase.google.com/docs/reference/js/storage#storageerrorcode)
- [FirestoreErrorCode](https://firebase.google.com/docs/reference/js/firestore_.md#firestoreerrorcode)
- [Admin Authentication API Errors](https://firebase.google.com/docs/auth/admin/errors)
- [Handle Error Messages](https://firebase.google.com/docs/storage/web/handle-errors)
