import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import FormInput from './FormInput';
import { Controller, useForm } from 'react-hook-form';
import { validateSchema } from './Validation';
import { yupResolver } from "@hookform/resolvers/yup";

import DateTimePickerModal from 'react-native-modal-datetime-picker';

import DropDownPicker from 'react-native-dropdown-picker';
import moment from 'moment';

const listMajor = [
  { label: 'Lập trình viên', value: 'Lập trình viên' },
  { label: 'Tester', value: 'Tester' },
  { label: 'Quản lý', value: 'Quản lý' },
]

const genderData = ['Nam', 'Nữ', 'Khác'];

export default function App() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);   
  const [majorOpen, setMajorOpen] = useState(false)
  const [birthday, setBirthday ] = useState("")
  
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues:{
      fullname:"",
      dob:"",
      idcard:"",
      phone:"",
      email:"",
      gender:"",
      major:""
    },
    mode: "onChange",
    resolver: yupResolver(validateSchema)
  });


  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const onSubmit = (data) => { 
  console.log(getValues(data))};


  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView>

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
        <Controller
            name="dob"
            control={control}
            rules={{
              required: true,
             }}
            render={({ field: {  onChange, value } }) => (
        <View>
        <DateTimePickerModal 
        isVisible={isDatePickerVisible}
        value={value}
        mode="date"
        minimumDate={new Date(1957, 0, 1)}
        maximumDate= {new Date(2009, 11, 31)}
        onConfirm={(date) => {
          console.log("A date has been picked: ", date);
          onChange(moment(date).format("DD/MM/YYYY"))
          setBirthday(moment(date).format("DD/MM/YYYY"));
          hideDatePicker();}}
        onCancel={hideDatePicker}
        date={new Date()}
        ></DateTimePickerModal>
        <TouchableOpacity
          onPress={showDatePicker}
          style={{
            flexDirection: "row",
            alignItems:"center",
            height: 45,
            width:"95%",
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
            { birthday || "Chọn ngày"}
          </Text>
        </TouchableOpacity>
              </View>
            )}></Controller>
      </View>

      <View>
        <Text>Giới tính</Text>
        <Controller
        name="gender"
        control={control}
        render={({ field: { onChange, value } }) => (
          <View style = {{flexDirection:"row"}}>
          {genderData.map(genderData => (
            <View
            style = {{ padding:15}}
            key={genderData}
            >
              <TouchableOpacity 
              style={{
                width:25,
                height:25,
                borderWidth:1,
                marginRight:5,
                alignItems:'center',
                borderRadius:15
              }}
              onPress={() => onChange(genderData)}
              >
                {value === genderData && <Text style = {{ color:"green", fontWeight:'bold'}}>X</Text>}
              </TouchableOpacity>
              <Text>{genderData}</Text>
            </View>
          ))}
        </View>
        )}
        >
        </Controller>
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
        <View>
          <Controller
          name="major"
          control={control}
          render={({ field: { onChange, value } }) => (
          <DropDownPicker
          style={{
            borderColor: "#A5A5A5",
            marginVertical: 10,
            borderRadius: 4,
            borderWidth: 1,
            paddingHorizontal: 12,
            height:50,
            width:"95%"
            }} 
          listMode="SCROLLVIEW"   
          dropDownDirection="TOP"      
          open={majorOpen}
          setOpen={setMajorOpen}
          items={listMajor}
          value={value}
          setValue={onChange}
          onChangeValue={onChange}
          ></DropDownPicker>
          )}
        ></Controller>
        </View>
      </View>

      <View style = {{ alignItems:'center'}}>
        <TouchableOpacity  
        style = {styles.button}
        onPress={()=>{handleSubmit(onSubmit)}}
        >
          <Text>Chọn</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal:20
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
