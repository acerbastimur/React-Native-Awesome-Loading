![headLogo](https://user-images.githubusercontent.com/33218120/73749960-6afa0900-476d-11ea-817b-5dcad123e134.png)


React Native Awesome Loading
=======================================
Simple React Native library to have *awesome* loading indicators.

### Indicators:
<div>
<img src="https://user-images.githubusercontent.com/33218120/73750983-38e9a680-476f-11ea-994d-0192eff3d550.gif" width="320" height="auto" />
<img src="https://user-images.githubusercontent.com/33218120/73750984-39823d00-476f-11ea-83d6-e7961920050d.gif" width="320" height="auto" />
<img src="https://user-images.githubusercontent.com/33218120/73750985-39823d00-476f-11ea-82b4-dd9917b9e710.gif" width="320" height="auto" />
<img src="https://user-images.githubusercontent.com/33218120/73750986-39823d00-476f-11ea-95d6-8074993e2285.gif" width="320" height="auto" />
<img src="https://user-images.githubusercontent.com/33218120/73750987-39823d00-476f-11ea-9f3b-5164f0433005.gif" width="320" height="auto" />
<img src="https://user-images.githubusercontent.com/33218120/73750988-3a1ad380-476f-11ea-9516-404e92c647bf.gif" width="320" height="auto" />
<img src="https://user-images.githubusercontent.com/33218120/73750989-3a1ad380-476f-11ea-909e-7eca78bff797.gif" width="320" height="auto" />
<img src="https://user-images.githubusercontent.com/33218120/73750990-3a1ad380-476f-11ea-8880-478abad5fd57.gif" width="320" height="auto" />
</div>

 

 

### Download & Installation

```shell 
$ npm i react-native-fast-image
$ npm i awesomeloading
$ cd ios
$ pod install
 
```
### Usage

```
import AwesomeLoading from 'awesomeloading';

...

        <AwesomeLoading indicatorId={8} size={50} isActive={true} text="loading" />

```
### Props

| Prop  | Type | Default Value |
| ------------- | ------------- | ------------- |
| indicatorId  | number(1,2,3,4,5,6,7,8)  | 1  |
| isActive  | boolean (required) | false  |
| size  | number | 50  |
| text  | string | null  |
| textStyle  | TextStyle | null  |
| direction  | 'row' | 'column' | 'column'  |
 
### Contributing

You can open an issue to warn me :)

### Authors or Acknowledgments

*   Umut Acerbastimur

### License

This project is licensed under the MIT License
