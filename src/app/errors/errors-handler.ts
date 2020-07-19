import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ErrorsHandler implements ErrorHandler {
  constructor(private injector: Injector) {}

  // Need to get ToastrService from injector rather than constructor injection to avoid cyclic dependency error
  private get toastrService(): ToastrService {
    return this.injector.get(ToastrService);
  }

  handleError(error: Error | HttpErrorResponse) {
    if (error instanceof HttpErrorResponse) {
      if (!navigator.onLine) {
        return this.toastrService.error('No internet connection!');
      } else {
        return this.toastrService.error(
          `${error.status} - ${error.message}`,
          'Error',
          {
            onActivateTick: true,
          }
        );
      }
    } else {
      // Handle Client Error (Angular Error, ReferenceError...)
    }

    // Log the error anyway
    console.error('Shit happens: ', error);
  }
}
