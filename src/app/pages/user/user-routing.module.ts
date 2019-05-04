import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { UserListComponent } from "./user-list/user-list.component";
import { UserInfoComponent } from "./user-info/user-info.component";
import { AuthGuard } from "../../core/guards/auth.guard";
import { UserListResolver } from "../../shared/resolvers/user-list.resolver";

const routes: Routes = [
	{
		path: 'users',
		children:[
			{
				path: '',
				component: UserListComponent,
				canActivate: [AuthGuard],
				resolve: {users: UserListResolver},
				data: { title:'Usuários' }
			},
			{
				path: 'info/:id',
				component: UserInfoComponent,
				canActivate: [AuthGuard],
				data: { title:'Informação Usuário' }
			}
		]
	}
];

@NgModule({
	exports: [RouterModule],
	imports: [RouterModule.forChild(routes)]
})
export class UserRoutingModule {

}
