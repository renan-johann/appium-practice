# POC-KUANTOKUSTA-TEST-APPIUM

## Referência para configuração local do Appium e Emulador

<https://medium.com/@marina.s.viana/preparando-o-ambiente-para-appium-e663f04af8f2>

### Config JAVA:

`sudo apt install openjdk-8-jdk`

`export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64`
`export PATH=$PATH:$JAVA_HOME/bin`

### Config Android SDK:

`sudo apt update && sudo apt install android-sdk`

`export **ANDROID_HOME**=_/home/renan/Android/Sdk_`
`export **ANDROID_SDK_ROOT**=_/home/renan/Android/Sdk_`
`export **PATH**=_$ANDROID_SDK/emulator:$ANDROID_SDK/tools:$PATH_`

### Install Android emulator AOSP from Command-line:

`$ANDROID_HOME/tools/bin/avdmanager create avd -n Pixel_API_30_AOSP -d pixel --package "system-images;android-30;default;x86_64"`

#### ps: Or install via Android Studio into Tools > AVD Manager

### Install emulator AOSP from Command-line:

### Environment variables Android

`export **ANDROID_HOME**="_$HOME/Android/Sdk_"`
`export **ANDROID_USER_HOME**="_$HOME/.android/_"`
`export **ANDROID_AVD_HOME**="_$ANDROID_USER_HOME/avd/_"`
`export **JAVA_HOME**="_/usr/lib/jvm/java-8-openjdk-amd64_"`

### Path variables Android

`export **PATH**="_$PATH:$ANDROID_HOME/tools_"`
`export **PATH**="_$PATH:$ANDROID_HOME/tools/bin_"`
`export **PATH**="_$PATH:$ANDROID_HOME/tools/emulator_"`
`export **PATH**="_$PATH:$ANDROID_HOME/platform-tools_"`
`export **PATH**="_$PATH:$JAVA_HOME/bin_"`

### Install Appium

`npm install -g appium`
`npm install -g appium-doctor`

### Appium Command-line to check if setup is OK

> appium-doctor --android
> appium-doctor --ios
