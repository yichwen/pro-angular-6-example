import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'chapter13', loadChildren: './chapter13/ch13-module#Ch13Module' },
  { path: 'chapter14', loadChildren: './chapter14/ch14-module#Ch14Module' },
  { path: 'chapter14b', loadChildren: './chapter14b/ch14b-module#Ch14BModule' },
  { path: 'chapter15', loadChildren: './chapter15/ch15-module#Ch15Module' },
  { path: 'chapter16', loadChildren: './chapter16/ch16-module#Ch16Module' },
  { path: 'chapter17', loadChildren: './chapter17/ch17-module#Ch17Module' },
  { path: 'chapter18', loadChildren: './chapter18/feature.module#FeatureModule' },
  { path: 'chapter19', loadChildren: './chapter19/feature.module#FeatureModule' },
  { path: '', redirectTo: 'chapter19', pathMatch: 'full' },
  { path: '**', redirectTo: 'chapter19' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
