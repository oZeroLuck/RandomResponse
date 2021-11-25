package com.zeroluck.randomresponse.controller;

import com.zeroluck.randomresponse.service.RandomStatusService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("random")
@RestController
public class RandomStatusController {

    private final RandomStatusService randomStatusService;

    public RandomStatusController(RandomStatusService randomStatusService) {
        this.randomStatusService = randomStatusService;
    }

    @GetMapping("/response")
    public ResponseEntity<String> randomResponse() {
        HttpStatus httpStatus = randomStatusService.getRandomStatus();
        return new ResponseEntity<>("Surprise!", httpStatus);
    }

}
