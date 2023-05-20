package com.br.ontonto.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Table(name = "USERS")
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
public class User {
    @Column(name = "users_id")
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String nome;
    @Email
    private String email;
    private String password;
}
