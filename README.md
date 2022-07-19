# "Pico y Placa" Predictor - Stack Builders Internship

## Hello! Here you can find information about the exercise proposed by Stack Builders for an internship position. I hope you like it :bulb:

## 1. Proposed Exercise
Using the language that you feel most proficient in, we’d like you to write a "Pico y Placa" predictor. The inputs should be a license plate number (the full number, not the last digit. e.g. PBX-1234), a date (as a String), and a time. Feel free to choose the date / time format you're comfortable with. The program should return whether or not that car can be on the road. You may use any input and output method you prefer. 

**Note:** To develop this application you need to consider the past rules of the Pico&Placa. (Hours: 7:00am - 9:30am / 16:00pm - 19:30).

## 2. Overview of my solution 
For this exercise I focused on the following important points:
 1. License plate request, vehicle object creation and license plate validation as applicable in Ecuador.
 2. Date request and validation in the format (MM/DD/YYYY).
 3. Time request and validation in the format (hh:mm).
 4. Calculation of result based on the "pico y placa" past time.
 5. Unit Tests of the algorithm for calculating the result.
## 3. Architecture  📐
![IOET-Exercise-ARCH](https://user-images.githubusercontent.com/44406615/179069309-e36c92f5-47a7-45d4-ae00-529f4c1db17b.png)
In the figure it can be seen that the Model - View - Controller (MVC) architectural pattern was used, which controls the handling of vehicle objects in an excellent way and the code can be organized in a better way.
### Program execution steps according to architecture
 1. The client requests the program to run and enters the inputs. 
 2. The controller receives his request, creates the vehicle object and processes until it receives the response as to whether the vehicle is in restricted hours or not.
 3. The controller sends the result to the view
 4. The view is in charge of displaying the result to the client ***(In this case, the result has been printed by console).***
## 4. Explanation of algorithm
- Obtaining the day of the week according to the requested date by means of the getDay() function.
- Obtaining the last digit of the license plate
- If the day is 0 or 6 (Saturday or Sunday), it will return the warning: "Can circulate".
- Validated by means of a Switch - Case sentence, in each case (1-5), corresponding to the days of the week.
- If the last digit of the license plate coincides with the day, it will be validated if the hour is in the interval where the vehicle cannot drive: 07:00 - 9:30 and 16:00 to 18:30.
-  If it coincides with the mentioned time interval, it will return the warning "Can not circulate", otherwise it will return "Can circulate".

## 5. How to run this project:question:

Make sure `node` & `npm` is installed on your system.

#### 1. Open the folder in which you want to run your project
#### 2. Open console
#### 3. Clone this repo
```
   git clone https://github.com/jlgalarza3/PicoyPlaca-StackBuilders-Exercise.git
```
### 4. Change Directory
```
   cd .\PicoyPlaca-StackBuilders-Exercise\
```

### 5. Open on Visual Studio Code
```
   code .
```
### 6. Install Dependencies 

> Only the jest dependency will be installed for unit testing.
> Only prompt-sync dependency will be installed to request data

```
npm install
```
### 7. Run Project
```
node .\index.js
```
### 8. Run Unit Tests
```
npm test
```


👉  Made with [Javascript](https://github.com/topics/javascript) 
======
