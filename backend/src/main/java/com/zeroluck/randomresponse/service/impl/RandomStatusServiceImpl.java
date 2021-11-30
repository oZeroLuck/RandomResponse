package com.zeroluck.randomresponse.service.impl;

import com.zeroluck.randomresponse.service.RandomStatusService;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class RandomStatusServiceImpl implements RandomStatusService {

    final Map<Integer, HttpStatus> informationalMap = new HashMap<>();
    final Map<Integer, HttpStatus> successfulMap = new HashMap<>();
    final Map<Integer, HttpStatus> redirectionMap = new HashMap<>();
    final Map<Integer, HttpStatus> clientErrorMap = new HashMap<>();
    final Map<Integer, HttpStatus> serverErrorMap = new HashMap<>();

    final Map<Integer, Integer> errorGroups = Map.ofEntries(
            Map.entry(1, 3),
            Map.entry(2, 9),
            Map.entry(3, 8),
            Map.entry(4, 32),
            Map.entry(5, 11)
    );

    public RandomStatusServiceImpl() {
        HttpStatus[] statuses = HttpStatus.values();
        int info = 0, successful = 0, redirection = 0, clientError = 0 , serverError = 0;

        for (HttpStatus status : statuses) {
            if (status.is1xxInformational()) {
                informationalMap.put(info, status);
                info++;
            }
            if (status.is2xxSuccessful()) {
                successfulMap.put(successful, status);
                successful++;
            }
            if (status.is3xxRedirection()) {
                redirectionMap.put(redirection, status);
                redirection++;
            }
            if (status.is4xxClientError()) {
                clientErrorMap.put(clientError, status);
                clientError++;
            }
            if (status.is5xxServerError()) {
                serverErrorMap.put(serverError, status);
                serverError++;
            }

        }

    }

    @Override
    public HttpStatus getRandomStatus() {
        final int type = getRandomNumber(1, 5);

        final int specificError = getRandomNumber(0, errorGroups.get(type));

        switch (type) {
            case 1: return informationalMap.get(specificError);
            case 2: return successfulMap.get(specificError);
            case 3: return redirectionMap.get(specificError);
            case 4: return clientErrorMap.get(specificError);
            default: return serverErrorMap.get(specificError);
        }

    }

    @Override
    public HttpStatus[] getMultipleStatus(int number) {
        HttpStatus[] outPut = new HttpStatus[number];
        for (int i = 0; i < number; i++) {
            outPut[i] = getRandomStatus();
        }
        return outPut;
    }

    private int getRandomNumber(int min, int max) {
        final int range = max - min + 1;
        return (int) (Math.random() * range) + min;
    }

}
