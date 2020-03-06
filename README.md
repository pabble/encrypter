# pabble's encrypter
a simple but extremely powerful encryption/decryption engine.

### features:
<b>&gt;</b> <b>custom encrypting:</b> no one will be able to decrypt your message unless it guesses your 2 custom limitless keys.<br>
<b>&gt;</b> supports all <b>unicode</b> characters.<br>
<b>&gt;</b> lightweight and ready to use.


### usage:
```javascript
var text = "this is going to be encrypted";

var seed = {
  dec: 12345, //any decimal number, without restriction
  bin: "01101101" //any sequence of 0's and 1's. It must be a string
};

var encrypted = encrypt(text, seed);
```
