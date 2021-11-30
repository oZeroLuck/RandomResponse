package com.zeroluck.randomresponse.controller;

import com.zeroluck.randomresponse.service.RandomStatusService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
    public HttpStatus randomResponse() {
        return randomStatusService.getRandomStatus();
    }

    @GetMapping("/response/multiple/{number}")
    public HttpStatus[] multipleResponses(@PathVariable(name = "number") int number) {
        return randomStatusService.getMultipleStatus(number);
    }

}
