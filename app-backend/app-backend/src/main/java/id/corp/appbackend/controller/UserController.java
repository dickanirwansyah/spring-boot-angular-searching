package id.corp.appbackend.controller;

import id.corp.appbackend.model.User;
import id.corp.appbackend.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/user")
@CrossOrigin(origins = {"*"})
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping(value = "/register")
    public String register(@RequestBody User user){
        userRepository.save(user);
        return "Hi "+ user.getName() + " your registration process successfully completed";
    }

    @GetMapping(value = "/getAllUsers")
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    @GetMapping(value = "/getUser/{email}")
    public List<User> getUser(@PathVariable("email")String email){
        return userRepository.findByEmail(email);
    }

    @DeleteMapping(value = "/cancelRegistration/{id}")
    public List<User> cancelRegistration(@PathVariable("id") int id){
        userRepository.deleteById(id);
        return userRepository.findAll();
    }
}
