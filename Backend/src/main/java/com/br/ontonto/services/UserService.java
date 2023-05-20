package com.br.ontonto.services;

import com.br.ontonto.model.User;
import com.br.ontonto.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserService {

    @Autowired
    private final UserRepository userRepository;

    @Autowired
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public User createUser(User form) {
        User newUser = new User();
        newUser.setNome(form.getNome());
        newUser.setEmail(form.getEmail());
        newUser.setPassword(bCryptPasswordEncoder.encode(form.getPassword()));
        return userRepository.save(newUser);
    }
}
