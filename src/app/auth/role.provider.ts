/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import {NbAuthOAuth2JWTToken, NbAuthService} from '@nebular/auth';
import {NbRoleProvider} from '@nebular/security';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable()
export class RoleProvider extends NbRoleProvider {
    constructor(private authService: NbAuthService) {
        super();
    }

    getLowerCaseRoles(roles: any): string | string[] {
        if (Array.isArray(roles)) {
            roles = roles.map(element => {
                return element.toLowerCase();
            });
        } else {
            roles = roles.toLowerCase();
        }
        return roles;
    }

    getRole(): Observable<string | string[]> {
        return this.authService.getToken()
            .pipe(
                map((token: NbAuthOAuth2JWTToken) => {
                    const payload = token.getAccessTokenPayload();
                    //ThuyetLV
                    // console.log("====RoleProvider getRole===");
                    // console.log(payload);
                    // return 'guest';
                    // let valid = token.isValid();
                    // let checked = !!(token.isValid() && payload && payload['role']) ? this.getLowerCaseRoles(payload['role']) : 'guest';
                    // console.log(checked);
                    // console.log(valid);
                    return !!(token.isValid() && payload && payload['role']) ? this.getLowerCaseRoles(payload['role']) : 'guest';
                }),
            );
    }
}
