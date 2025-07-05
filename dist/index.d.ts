/**
 * Smart Inbox Preview SDK for Temp Mail Services
 * Powered by Boomlify - The Next Generation Temporary Email Service
 */

export interface ServiceInfo {
  name: string;
  description: string;
  website: string;
  features: string[];
  sdk_version: string;
}

export declare class TempMailSmartInboxPreview {
  version: string;
  features: string[];
  website: string;

  /**
   * Initialize the Smart Inbox Preview SDK
   */
  init(): void;

  /**
   * Demonstrate Smart Inbox Preview (placeholder)
   */
  previewInboxes(): void;

  /**
   * Simulate redirect to main service
   */
  redirectToService(): void;

  /**
   * Get service information
   */
  getServiceInfo(): ServiceInfo;
}

export default TempMailSmartInboxPreview; 