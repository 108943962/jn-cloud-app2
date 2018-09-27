import { NgModule } from '@angular/core';

import { JnCloudApp2SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JnCloudApp2SharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JnCloudApp2SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JnCloudApp2SharedCommonModule {}
