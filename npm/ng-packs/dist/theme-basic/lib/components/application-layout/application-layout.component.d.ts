import { ABP, ApplicationConfiguration, eLayoutType } from '@abp/ng.core';
import { AfterViewInit, OnDestroy, QueryList, TemplateRef, TrackByFunction } from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngxs/store';
import { OAuthService } from 'angular-oauth2-oidc';
import { Observable } from 'rxjs';
import { Layout } from '../../models/layout';
export declare class ApplicationLayoutComponent implements AfterViewInit, OnDestroy {
    private store;
    private oauthService;
    static type: eLayoutType;
    routes$: Observable<ABP.FullRoute[]>;
    currentUser$: Observable<ApplicationConfiguration.CurrentUser>;
    languages$: Observable<ApplicationConfiguration.Language[]>;
    navElements$: Observable<Layout.NavigationElement[]>;
    currentUserRef: TemplateRef<any>;
    languageRef: TemplateRef<any>;
    navbarRootDropdowns: QueryList<NgbDropdown>;
    isDropdownChildDynamic: boolean;
    readonly visibleRoutes$: Observable<ABP.FullRoute[]>;
    readonly defaultLanguage$: Observable<string>;
    readonly dropdownLanguages$: Observable<ApplicationConfiguration.Language[]>;
    readonly selectedLangCulture: string;
    rightPartElements: TemplateRef<any>[];
    trackByFn: TrackByFunction<ABP.FullRoute>;
    trackElementByFn: TrackByFunction<ABP.FullRoute>;
    constructor(store: Store, oauthService: OAuthService);
    private checkWindowWidth;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onChangeLang(cultureName: string): void;
    logout(): void;
}
