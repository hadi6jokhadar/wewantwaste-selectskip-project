export interface ItemCardProps {
  items: ItemClass[];
  onConfirm?: () => void;
}

export interface Item {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}

export class ItemClass implements Item {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;

  constructor(data: Item) {
    this.id = data.id;
    this.size = data.size;
    this.hire_period_days = data.hire_period_days;
    this.transport_cost = data.transport_cost;
    this.per_tonne_cost = data.per_tonne_cost;
    this.price_before_vat = data.price_before_vat;
    this.vat = data.vat;
    this.postcode = data.postcode;
    this.area = data.area;
    this.forbidden = data.forbidden;
    this.created_at = data.created_at;
    this.updated_at = data.updated_at;
    this.allowed_on_road = data.allowed_on_road;
    this.allows_heavy_waste = data.allows_heavy_waste;
  }

  // Helper method to calculate total price including VAT
  getTotalPrice(): number {
    return this.price_before_vat * (1 + this.vat / 100);
  }

  getTitle(): string {
    return this.size + " Yard Skip";
  }

  // Helper method to check if item is recently created (within last 30 days)
  isRecentlyCreated(): boolean {
    const createdDate = new Date(this.created_at);
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    return createdDate > thirtyDaysAgo;
  }

  // Helper method to check if item was recently updated (within last 7 days)
  isRecentlyUpdated(): boolean {
    const updatedDate = new Date(this.updated_at);
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    return updatedDate > sevenDaysAgo;
  }
}
