package com.zeroluck.randomresponse.controller;

import com.zeroluck.randomresponse.service.RandomStatusService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.CacheControl;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("random")
@RestController
public class RandomStatusController {

    private final Logger log = LoggerFactory.getLogger(RandomStatusController.class);

    private final RandomStatusService randomStatusService;

    public RandomStatusController(RandomStatusService randomStatusService) {
        this.randomStatusService = randomStatusService;
    }

    @GetMapping("/response")
    public ResponseEntity<String> randomResponse() {
        HttpStatus httpStatus = randomStatusService.getRandomStatus();
        HttpHeaders headers = new HttpHeaders();
        headers.setCacheControl(CacheControl.noStore());
        log.info(String.valueOf(httpStatus));
        return new ResponseEntity<>("Surprise!", headers, httpStatus);
    }

}
