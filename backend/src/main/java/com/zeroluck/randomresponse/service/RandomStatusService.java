package com.zeroluck.randomresponse.service;

import org.springframework.http.HttpStatus;

public interface RandomStatusService {

    HttpStatus getRandomStatus();

    HttpStatus[] getMultipleStatus(int number);
}
