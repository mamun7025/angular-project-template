// Angular Modules
import { Injectable } from '@angular/core'; 
@Injectable() 
export class Constants {
    public static TitleOfApp: string = "Angular Master Project"; 
    public readonly API_ENDPOINT: string = 'http://localhost:7575/project/'; 
    public readonly API_MOCK_ENDPOINT: string = 'http://localhost:7575/project'; 
}