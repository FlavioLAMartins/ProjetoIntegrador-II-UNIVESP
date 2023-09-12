package com.univesp.librosys.Controller;

import org.springframework.web.bind.annotation.RestController;
import java.time.LocalDate;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
@RequestMapping("/api") 
public class Hello {
    @GetMapping("/")
    public String hello() {
        return "Olá Mundo"+ LocalDate.now();
    }
}

