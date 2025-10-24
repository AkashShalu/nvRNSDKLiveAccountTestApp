import UIKit
import React
import React_RCTAppDelegate
import ReactAppDependencyProvider

@main
class AppDelegate: RCTAppDelegate {
  
  override func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {
    self.moduleName = "nvRNSDKLiveAccountTestApp"
    self.dependencyProvider = RCTAppDependencyProvider()

    // You can add your custom initial props in the dictionary below.
    // They will be passed down to the ViewController used by React Native.
    
    self.initialProps = [:]
    
    var nvAccountSecretKey = ""
    var nvAccountBrnadID = 0

#if DEBUG
    nvAccountBrnadID = 7577
    nvAccountSecretKey = "DB52A5B00BB0D3BF426639A1B9FCF2F7"
#else
    nvAccountBrnadID = 8115
    nvAccountSecretKey = "515CBDE82C402BDD85E4DFCCFD8904F6"
#endif
    
//    nvAccountBrnadID = 7577
//    nvAccountSecretKey = "DB52A5B00BB0D3BF426639A1B9FCF2F7"
    
    UNUserNotificationCenter.current().delegate = self
    RNNotifyvisitors.initialize(withBrandId: nvAccountBrnadID, secretKey: nvAccountSecretKey, launchingOptions: launchOptions)
    RNNotifyvisitors.registerPush(withDelegate: self, app: application, launchOptions: launchOptions)

    return super.application(application, didFinishLaunchingWithOptions: launchOptions)
  }

  override func sourceURL(for bridge: RCTBridge) -> URL? {
    self.bundleURL()
  }

  override func bundleURL() -> URL? {
#if DEBUG
    RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index")
#else
    Bundle.main.url(forResource: "main", withExtension: "jsbundle")
#endif
  }
  
  override func applicationDidEnterBackground(_ application: UIApplication) {
    RNNotifyvisitors.applicationDidEnterBackground(application)
  }
  override func applicationDidBecomeActive(_ application: UIApplication) {
    RNNotifyvisitors.applicationDidBecomeActive(application)
  }
  override func applicationWillEnterForeground(_ application: UIApplication) {
    RNNotifyvisitors.applicationWillEnterForeground(application)
  }
  override func applicationWillTerminate(_ application: UIApplication) {
    RNNotifyvisitors.applicationWillTerminate()
  }
  
  override func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey : Any] = [:]) -> Bool {
    RNNotifyvisitors.openUrl(with: app, url: url)
    return true
  }
  
  override func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
    RNNotifyvisitors.application(application, didRegisterForRemoteNotificationsWithDeviceToken: deviceToken)
  }
  override func application(_ application: UIApplication, didFailToRegisterForRemoteNotificationsWithError error: any Error) {
    RNNotifyvisitors.application(application, didFailToRegisterForRemoteNotificationsWithError: error)
  }
  
  
}

extension AppDelegate: UNUserNotificationCenterDelegate {
  override func application(_ application: UIApplication, didReceiveRemoteNotification userInfo: [AnyHashable : Any], fetchCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void) {
    RNNotifyvisitors.application(application, didReceiveRemoteNotification: userInfo, fetchCompletionHandler: completionHandler)
  }
  func userNotificationCenter(_ center: UNUserNotificationCenter, willPresent notification: UNNotification, withCompletionHandler completionHandler: @escaping (UNNotificationPresentationOptions) -> Void) {
    RNNotifyvisitors.willPresent(notification, withCompletionHandler: completionHandler)
  }
  func userNotificationCenter(_ center: UNUserNotificationCenter, didReceive response: UNNotificationResponse, withCompletionHandler completionHandler: @escaping () -> Void) {
    RNNotifyvisitors.didReceive(response)
  }
}
