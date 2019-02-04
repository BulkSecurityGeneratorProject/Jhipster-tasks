import { NgModule } from '@angular/core';

import { AymenTasksSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [AymenTasksSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [AymenTasksSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class AymenTasksSharedCommonModule {}
