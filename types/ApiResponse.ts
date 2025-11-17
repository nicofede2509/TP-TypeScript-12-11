export type ApiResponse<T> = 
 | { success: true; data: T }
 | { success: false; error: ApiError };

export interface ApiError {
 message: string;
 status?: number;
 timestamp: Date;
}


export class ImprovedHttpService {
   constructor(private baseUrl: string) {}

   async get<T>(endpoint: string): Promise<ApiResponse<T>> {
      try {
         const response = await fetch(`${this.baseUrl}${endpoint}`);

         if (!response.ok) {
            return {
               success: false,
               error: {
                  message: `Error HTTP: ${response.statusText}`,
                  status: response.status,
                  timestamp: new Date(),
               },
            };
         }

         const data: T = await response.json();
         return { success: true, data };
      } catch (error) {
         return {
            success: false,
            error: {
               message: error instanceof Error ? error.message : 'Error desconocido',
               timestamp: new Date(),
            },
         };
      }
   }
}