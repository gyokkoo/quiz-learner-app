import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class NotificationService {
  constructor(private toastr: ToastrService) {}

  success(successMessage: string): void {
    this.toastr.success(successMessage);
  }

  error(errorMessage: string): void {
    this.toastr.error(errorMessage);
  }
}
