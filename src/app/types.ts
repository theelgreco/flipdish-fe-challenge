export interface Menu {
    MenuId: number;
    MenuVersionNumber: number;
    VersionGuid: string;
    MenuSections: MenuSection[];
    MenuSectionBehaviour: number;
    DisplaySectionLinks: boolean;
    ConcessionStores: unknown[];
}

export interface MenuSection {
    MenuSectionId: number;
    Name: string;
    Description: null | string;
    DisplayOrder: number;
    MenuItems: MenuItem[];
    PublicId: string;
    IsDeleted: boolean;
    IsAvailable: boolean;
    IsHiddenFromUsers: boolean;
    ImageName: null | string;
    ImageUrl: null | string;
    CellAspectRatio: number;
    CellLayoutType: number;
    MenuSectionAvailability: MenuSectionAvailability;
    ConcessionStoreId: null;
    MenuSectionMetadata: unknown[];
}

export interface MenuItem {
    MenuItemId: number;
    Name: string;
    Description: null | string;
    SpicinessRating: number | null;
    Price: number;
    DisplayOrder: number;
    IsDeleted: boolean;
    Alcohol: boolean;
    Tags: unknown[];
    PublicId: string;
    IsAvailable: boolean;
    MenuItemOptionSets: MenuItemOptionSet[];
    TaxRate: null;
    TaxRateId: number | null;
    TaxValue: number;
    MenuSectionId: number;
    ImageName: null | string;
    ImageUrl: null | string;
    CellAspectRatio: number;
    CellLayoutType: number;
    ActualPrice: number;
    DisableVouchers: boolean;
    ExcludeFromVoucherDiscounting: boolean;
    DailySpecialHours: unknown[];
    PriceCanIncrease: boolean;
    MenuItemMetadata: unknown[];
}

export interface MenuItemOptionSet {
    Name: null | string;
    MenuItemOptionSetId: number;
    IsMasterOptionSet: boolean;
    DisplayOrder: number;
    MinSelectCount: number;
    MaxSelectCount: number;
    IsDeleted: boolean;
    PublicId: string;
    MenuItemOptionSetItems: MenuItemOptionSetItem[];
    ImageName: null;
    ImageUrl: null;
    CellAspectRatio: number;
    CellLayoutType: number;
    MinPrice: number;
    MenuItemId: number;
    MenuItemOptionSetMetadata: unknown[];
}

export interface MenuItemOptionSetItem {
    MenuItemOptionSetItemId: number;
    Name: string;
    Price: number;
    TaxRateId: null;
    TaxRate: null;
    TaxValue: number;
    IsAvailable: boolean;
    DisplayOrder: number;
    IsDeleted: boolean;
    Tags: unknown[];
    NextMenuItemOptionSetId: number | null;
    PublicId: string;
    ImageName: null | string;
    ImageUrl: null | string;
    CellAspectRatio: number;
    CellLayoutType: number;
    OptionSetItemMetadata: unknown[];
}

export interface MenuSectionAvailability {
    MenuSectionId: number;
    AvailableTimes: AvailableTime[] | null;
    AvailabilityMode: number;
}

export interface AvailableTime {
    BusinessHoursPeriodId: number;
    DayOfWeek: number;
    StartTime: string;
    Period: string;
    StartTimeEarly: string;
    PeriodEarly: string;
}
