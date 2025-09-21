export interface MenuType {
    MenuId: number;
    MenuVersionNumber: number;
    VersionGuid: string;
    MenuSections: MenuSectionType[];
    MenuSectionBehaviour: number;
    DisplaySectionLinks: boolean;
    ConcessionStores: unknown[];
}

export interface MenuSectionType {
    MenuSectionId: number;
    Name: string;
    Description: null | string;
    DisplayOrder: number;
    MenuItems: MenuItemType[];
    PublicId: string;
    IsDeleted: boolean;
    IsAvailable: boolean;
    IsHiddenFromUsers: boolean;
    ImageName: null | string;
    ImageUrl: null | string;
    CellAspectRatio: number;
    CellLayoutType: number;
    MenuSectionAvailability: MenuSectionAvailabilityType;
    ConcessionStoreId: null;
    MenuSectionMetadata: unknown[];
}

export interface MenuItemType {
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
    MenuItemOptionSets: MenuItemOptionSetType[];
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

export interface MenuItemOptionSetType {
    Name: null | string;
    MenuItemOptionSetId: number;
    IsMasterOptionSet: boolean;
    DisplayOrder: number;
    MinSelectCount: number;
    MaxSelectCount: number;
    IsDeleted: boolean;
    PublicId: string;
    MenuItemOptionSetItems: MenuItemOptionSetItemType[];
    ImageName: null;
    ImageUrl: null;
    CellAspectRatio: number;
    CellLayoutType: number;
    MinPrice: number;
    MenuItemId: number;
    MenuItemOptionSetMetadata: unknown[];
}

export interface MenuItemOptionSetItemType {
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

export interface MenuSectionAvailabilityType {
    MenuSectionId: number;
    AvailableTimes: AvailableTimeType[] | null;
    AvailabilityMode: number;
}

export interface AvailableTimeType {
    BusinessHoursPeriodId: number;
    DayOfWeek: number;
    StartTime: string;
    Period: string;
    StartTimeEarly: string;
    PeriodEarly: string;
}
