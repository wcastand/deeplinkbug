## Bug deeplink


when coming from a deeplink, the hook like `useSegments` or `usePathname` don't have the right value.


if you do something like `npx uri-scheme open "exp://192.168.1.9:19000/--/home" --ios`

it will render the right screen (`home`) but the hook will return 

```
 LOG  /undefined ["[...404]"]
```


I don't know if expo go is using deeplink by default to open the app because it also happens on reload in this example.

The app i'm working on only has the wrong pathname on deeplink (using expo-dev)

In my app the first render from the deeplink has the right screen( the one requested in deeplink) but the hook return `/` for pathname and `[]` for segments.



# Bug received / expected

- deeplink to the app 

```
npx uri-scheme open "exp://192.168.1.9:19000/--/home" --ios
```

received: 
```
 LOG  /undefined ["[...404]"]
```

expected:
```
 LOG  /home ["home"]
```

