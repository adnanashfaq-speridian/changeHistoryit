import { LightningElement, track } from 'lwc';

    export default class TABlwc extends LightningElement {
        @track isTab1Active = false;
        @track isTab2Active = false;
        @track isTab3Active = false;
        showInitialPage;
        showTabSet;
        textBox1Value = '';
        
        
        handleTextChange(event){
            this.textBox1Value = event.target.value;
            console.log('this.textBox1Value !!! '+this.textBox1Value);
        } 

        handleEButtonClick() {
            console.log('this.textBox1Value == '+this.textBox1Value);
            let finalVal =  this.textBox1Value.replace(/ /g, '%20');
            console.log('this.finalVal == '+finalVal);
            // Open a new browser window
            let tbval = "https://speridian122-dev-ed.develop.lightning.force.com/lightning/r/Report/00OHp00000Bda8mMAB/view?fv0=" + finalVal;
            window.open(tbval, '_blank');
        }
        
        handleVButtonClick() {
            // Open a new browser window
            window.open('https://speridian122-dev-ed.develop.lightning.force.com/lightning/r/Report/00OHp00000Bda8mMAB/view?fv0=Harry%20Stiles', '_blank');
        }

        handleNButtonClick() {
            // Open a new browser window
            window.open('https://speridian122-dev-ed.develop.lightning.force.com/lightning/r/Report/00OHp00000Bda8mMAB/view?fv0=Harry%20Stiles', '_blank');
        }

        connectedCallback() {
            this.showInitialPage = true;
            this.showTabSet = false;
        }

        showElectionsTab(){
            this.showInitialPage = false;
            this.showTabSet = true;
            this.isTab1Active = true;
        }

        handleTabChange(event) {
            // Reset tab activation status
            /*this.isTab1Active = false;
            this.isTab2Active = false;
            this.isTab3Active = false;*/

            // Activate the selected tab
            if (event.target.label === 'E Details') {
                this.isTab1Active = true;
            } else if (event.target.label === 'V Details') {
                this.isTab2Active = true;
            } else if (event.target.label === 'N Details') {
                this.isTab3Active = true;
            }
        }
    }
