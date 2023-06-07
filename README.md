
## Requirements to run the app

For development, you will need following things installed -

1. node - 12.18.0 or higher
2. yarn - package manager
3. Redis - Lightweight Cache DB **(Windows users must have at least version 3.0.504 or above)**

**ENV** files for the 3.0 app can be found in the Snippets section of this repository
___

## Cloning and running the app
### 1. Clone the app with HTTPS or SSH

```bash
git clone https://gitlab.com/sateeshpachamatla/react-tracks.git
(or)
git clone git@gitlab.com:sateeshpachamatla/react-tracks.git

Checkout branch -b react_test_1

```
### 2. Download and place the **env** file at the project root
If you are not sure about the environment you need - *local env* file should be fine
### 3. Install Dependencies
```bash
yarn install
```
### 4. Start the application

```bash
yarn start
```
**Note -**
For the app to run in your local, the **REDIS_HOST** must be pointed at *127.0.0.1*

___

Create DB with payment_methods
start npm 
Table will created in the DB payment_methods

___

Load the page to add/view the Card Details

http://localhost:3000/managepayment