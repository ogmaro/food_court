/* eslint-disable prettier/prettier */
import {
    CanActivate, ExecutionContext,
    Injectable
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RolesService } from '../../roles/roles.service';


@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private readonly reflector: Reflector, private rolesService: RolesService) { }
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const roles = this.reflector.get<string[]>('roles', context.getHandler())
        
        const request = context.switchToHttp().getRequest();
        
        if(request?.user){
            const { email } = request.user;
            const userRole = await this.rolesService.getUserRole(email);
            
            return roles.includes(userRole);
        }
        return false;
    }
}
