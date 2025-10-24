import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AppInputCard from './AppInputCard';

export type nvNCTabsUI = {
    MainHeading?: string,
    mainID?:string,
    firstInputPlaceHolder?: string,
    inputOneID?: string,
    secondInputPlaceHolder?: string,
    inputTwoID?:string,
  };

  export type nvNCTabsDetails = {
    Key1?: string,
    Key2?: string,
  };

const AdvanceNotificationCenterInputsView = (props: any) => {
  const nvNCTabsInitialsDetails: nvNCTabsDetails = {
    Key1: "",
    Key2: "",
  }
  const [nvNCTabsDetails, setNVNCTabsDetails] = useState(nvNCTabsInitialsDetails);

  const advanceNCenterTabsInpustData: nvNCTabsUI[] = [
  {
    MainHeading :"Notification Center First Tab",
    mainID:"nvNCFirstTag",
    firstInputPlaceHolder: "1st Tag Label",
    inputOneID: "firstTagLbl",
    secondInputPlaceHolder: "1st Tag Display Name",
    inputTwoID:"firstTagDisplayName",
  },
  {
    MainHeading :"Notification Center Second Tab",
    mainID:"nvNCSecondTag",
    firstInputPlaceHolder: "2nd Tag Label",
    inputOneID: "secondTagLbl",
    secondInputPlaceHolder: "2nd Tag Display Name",
    inputTwoID:"secondTagDisplayName",
  },
  {
    MainHeading :"Notification Center Third Tab",
    mainID:"nvNCThirdTag",
    firstInputPlaceHolder: "3rd Tag Label",
    inputOneID: "thirdTagLbl",
    secondInputPlaceHolder: "3rd Tag Display Name",
    inputTwoID:"thirdTagDisplayName",
  },
   {
    MainHeading :"Notification Center Default Selected Tab Index",
    mainID:"nvNCSelectedTabIndex",
    firstInputPlaceHolder: "Default Selected Index (only 0, 1 or 2 are valid else 0)",
    inputOneID: "nvNCSelectedTabIndexInput",
  },
  {
    MainHeading :"Notification Center Tabs Text Font",
    mainID:"nvNCTabsFonts",
    firstInputPlaceHolder: "Tabs Text Font Name",
    inputOneID: "nvNCTabsFontName",
    secondInputPlaceHolder: "Tabs Text Font Size",
    inputTwoID:"nvNCTabsFontSize",
  },
  {
    MainHeading :"Notification Center Selected Tabs Text Color",
    mainID:"nvNCTabsTextColor",
    firstInputPlaceHolder: "Selected Tab Text Color",
    inputOneID: "nvNCSelectedTabTextColor",
    secondInputPlaceHolder: "Not Selected Tab Text Color",
    inputTwoID:"nvNCNotSelectedTabTextColor",
  },
  {
    MainHeading :"Notification Center Selected Tabs Background Color",
    mainID:"nvNCTabsBGColor",
    firstInputPlaceHolder: "Selected Tab Background Color",
    inputOneID: "nvNCSelectedTabBGColor",
    secondInputPlaceHolder: "Not Selected Tab Background Color",
    inputTwoID:"nvNCNotSelectedTabBGColor",
  },
  // {
  //   MainHeading :"",
   //   mainID:"",
  //   firstInputPlaceHolder: "",
  //   inputOneID: "",
  //   secondInputPlaceHolder: "",
  //   inputTwoID:"",
  // }
];

  console.log(advanceNCenterTabsInpustData)

  function onInputTextChange(
    inputID: string,
    inputValue: string,
    AppInputCardID: string,
    inputPplaceholderText?: string,
  ) {
    console.log(`onInputTextChange = {inputID: ${inputID},
      inputValue: ${inputValue},
      AppInputCardID: ${AppInputCardID},
      inputPplaceholderText: ${inputPplaceholderText}}`);
      console.log("nvNCTabsDetails = ", props.nvNCTabsDetails);
      setNVNCTabsDetails(()=> ({Key1: "testVal1", Key2: "testVal2"}));
  }


  return (
    <View style={styles.container}>
      {advanceNCenterTabsInpustData.map(item => {
          return (<AppInputCard 
            id={item.mainID!}
            key={item.mainID!}
            headingText={item.MainHeading}
            inputOneID={item.inputOneID!}
            placeholderOne={item.firstInputPlaceHolder}
            inputTwoID={item.inputTwoID}
            placeholderTwo={item.secondInputPlaceHolder}
            onChangeInputValue={onInputTextChange}/>
        );
      })}
    </View>
    

    // (
    //     <AppInputCard
    //       id="test1"
    //       headingText="Heading Text"
    //       inputOneID="inp1"
    //       placeholderOne="input 1"
    //       onChangeInputValue={onInputTextChange}
    //     />
    //   );
  )
}

export default AdvanceNotificationCenterInputsView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})