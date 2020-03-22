/**package ru.coco.todo.controller;

import org.springframework.web.bind.annotation.*;
import ru.coco.todo.model.Address;
import ru.coco.todo.repository.AddressRepository;

import java.util.Optional;

/**
 * Created by a10282 on 11/04/2018.
 *
@RestController
@RequestMapping("/api")
public class AddressController {

    private AddressRepository addressRepository;

    public AddressController(AddressRepository addressRepository) {
        this.addressRepository = addressRepository;
    }

    @GetMapping(value = "/addresses")
    public Iterable<Address> getAllAddress() {
        return addressRepository.findAll();
    }

    @GetMapping(value = "/address/{addressId}")
    public Optional<Address> getAddress(@PathVariable long addressId) {
        return addressRepository.findByAddressId(addressId);
    }

    @DeleteMapping(value = "/address/{addressId}")
    public void deleteAddress(@PathVariable long addressId) {
        addressRepository.deleteByAddressId(addressId);
    }


    @PostMapping(value = "/address")
    public Address postAddress(@RequestBody Address address) {
        return addressRepository.save(address);
    }

    @PutMapping(value = "/address/{id}")
    public Address putAddress(@PathVariable long id, @RequestBody Address address) {
        address.setAddressId(id);
        return addressRepository.save(address);
    }
}*/
