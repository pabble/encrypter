# pabble's encrypter
a simple but extremely powerful encryption/decryption engine.

### features:
<b>&gt;</b> <b>custom encrypting:</b> no one will be able to decrypt your message unless it guesses your 2 custom limitless keys.<br>
<b>&gt;</b> supports all <b>unicode</b> characters.<br>
<b>&gt;</b> lightweight and ready to use.


### usage:
```
var text = "this is going to be encrypted";

var seed = {
  dec: 12345,
  bin: "01101101"
};

var encrypted = encrypt(text, seed);
```
