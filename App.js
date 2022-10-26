import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import FormInput from './FormInput';
import { Controller, useForm } from 'react-hook-form';
import { validateSchema } from './Validation';
import { yupResolver } from "@hookform/resolvers/yup";
import { CheckBox } from 'react-native-elements';

import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from "moment";

import {Picker} from '@react-native-picker/picker';

export default function App() {

  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [other, setOther] = useState(false);
  const [gender, setGender] = useState("")

  const [date, setDate] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  
  const [major, setMajor] = useState("");
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues:{
      fullname:"",
      idcard:"",
      phone:"",
      email:""
    },
    mode: "onChange",
    resolver: yupResolver(validateSchema)
  });

  const genderMale = () =>{
    setMale(true);
    setFemale(false);
    setOther(false);
    setGender("Nam")
  }
  const genderFemale = () =>{
    setMale(false);
    setFemale(true);
    setOther(false);
    setGender("Nữ")
  }
  const genderOther = () =>{
    setMale(false);
    setFemale(false);
    setOther(true);
    setGender("Khác")
  }

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.log("A date has been picked: ", date);
    setDate(moment(date).format("DD/MM/YYYY"));
    hideDatePicker();
  };

  const onSubmit = data => console.log(data);


  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <ScrollView>

        <View style = {{paddingTop:30, paddingBottom:15}}>
        <Controller
            name="fullname"
            control={control}
            rules={{
              required: true,
             }}
            render={({ field: { onChange, value } }) => (
              <FormInput
                style={{
                  marginVertical: 10,
                  borderRadius: 4,
                  borderWidth: 1,
                  paddingHorizontal: 12,
                  borderColor: "#A5A5A5",
                }}
                lable = "Họ và tên"
                placeholder="Họ và tên"
                value={value}
                onChangeText={onChange}
                errorMessage={errors?.fullname?.message}
              />
            )}
          />
        </View>

      <View style={styles.inputContainer}>
        <Text style = {{marginBottom:15}}>Ngày sinh</Text>
        <DateTimePickerModal 
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        date={new Date()}
        ></DateTimePickerModal>
        <TouchableOpacity
          onPress={() => showDatePicker()}
          style={{
            flexDirection: "row",
            alignItems:"center",
            height: 45,
            width:"85%",
            borderRadius: 4,
            borderWidth: 1,
            paddingHorizontal: 12,
            borderColor: "#A5A5A5",
          }}
        >
          <Text
            style={{
              flex: 1,
              textAlign:"left",
              fontSize: 15,
              color:'#A5A5A5'
            }}
          >
            {date || "Chọn ngày"}
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text>Giới tính</Text>
        <View style={{flexDirection:'row'}}>
        <CheckBox
        title="Nam"
        center
        checked={male}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        onPress={genderMale}
        ></CheckBox>
        <CheckBox
        title="Nữ"
        center
        checked={female}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        onPress={genderFemale}
        ></CheckBox>
        <CheckBox
        title="Khác"
        center
        checked={other}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        onPress={genderOther}
        ></CheckBox>
        </View>
      </View>

      <View style = {styles.inputContainer}>
        <Controller
            name="idcard"
            control={control}
            rules={{
              required: true,
             }}
            render={({ field: { onChange, value } }) => (
              <FormInput
                style={{
                  marginVertical: 10,
                  borderRadius: 4,
                  borderWidth: 1,
                  paddingHorizontal: 12,
                  borderColor: "#A5A5A5",
                }}
                lable = "Số CMND"
                placeholder="Số cmnnd"
                value={value}
                onChangeText={onChange}
                errorMessage={errors?.idcard?.message}
              />
            )}
          />
        </View>

        <View style = {styles.inputContainer}>
        <Controller
            name="phone"
            control={control}
            rules={{
              required: true,
             }}
            render={({ field: { onChange, value } }) => (
              <FormInput
                style={{
                  marginVertical: 10,
                  borderRadius: 4,
                  borderWidth: 1,
                  paddingHorizontal: 12,
                  borderColor: "#A5A5A5",
                }}
                lable = "Số điện thoại"
                placeholder="Số điện thoại"
                value={value}
                onChangeText={onChange}
                errorMessage={errors?.phone?.message}
              />
            )}
          />
        </View>

        <View style = {styles.inputContainer}>
        <Controller
            name="email"
            control={control}
            rules={{
              required: true,
             }}
            render={({ field: { onChange, value } }) => (
              <FormInput
                style={{
                  marginVertical: 10,
                  borderRadius: 4,
                  borderWidth: 1,
                  paddingHorizontal: 12,
                  borderColor: "#A5A5A5",
                }}
                lable = "Email"
                placeholder="email"
                value={value}
                onChangeText={onChange}
                errorMessage={errors?.email?.message}
              />
            )}
          />
        </View>

      <View style = {styles.inputContainer}>
        <Text>Nghề nghiệp</Text>
        <View
        style={{
          borderColor: "#A5A5A5",
          marginVertical: 10,
          borderRadius: 4,
          borderWidth: 1,
          paddingHorizontal: 12,
          height:50,
          width:"85%"
          }}
        >
        <Picker
          selectedValue={major}
          onValueChange={(itemValue, itemIndex) =>
            setMajor(itemValue)
          }>
        <Picker.Item label="Lập trình viên" value="Lập trình viên" />
        <Picker.Item label="Tester" value="Tester" />
        </Picker>
        </View>
      </View>

      <View style = {{ alignItems:'center'}}>
        <TouchableOpacity 
        style = {styles.button}
        onPress={()=>{handleSubmit(onSubmit)}}
        >
          <Text>Chon</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
      </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer:{
    paddingBottom:15
    
  },
  inputBox:{
    width:350,
    borderWidth:1,
    alignItems:'center',
    justifyContent: 'center',
  },
  button:{
    height:50,
    width:100,
    backgroundColor:"orange",
    borderWidth:1,
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center'
  }
});
