package ru.coco.todo.model;

import javax.persistence.*;

@Entity
public class Address{
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long addressId;
    
    private String name;
    private String address;
    private String phone;
    private String email;
    private String familyMembers;

    

    /**
     * @return String return the name
     */
    public String getName() {
        return name;
    }

    /**
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return String return the address
     */
    public String getAddress() {
        return address;
    }

    /**
     * @param address the address to set
     */
    public void setAddress(String address) {
        this.address = address;
    }

    /**
     * @return String return the phone
     */
    public String getPhone() {
        return phone;
    }

    /**
     * @param phone the phone to set
     */
    public void setPhone(String phone) {
        this.phone = phone;
    }

    /**
     * @return String return the email
     */
    public String getEmail() {
        return email;
    }

    /**
     * @param email the email to set
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * @return String return the familyMembers
     */
    public String getFamilyMembers() {
        return familyMembers;
    }

    /**
     * @param familyMembers the familyMembers to set
     */
    public void setFamilyMembers(String familyMembers) {
        this.familyMembers = familyMembers;
    }


    /**
     * @return int return the addressId
     */
    public long getAddressId() {
        return addressId;
    }

    /**
     * @param addressId the addressId to set
     */
    public void setAddressId(long addressId) {
        this.addressId = addressId;
    }

}