package com.notifyvisitors.rn.nvrnsdkliveaccounttestapp

import android.app.Application
import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactHost
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.load
import com.facebook.react.defaults.DefaultReactHost.getDefaultReactHost
import com.facebook.react.defaults.DefaultReactNativeHost
import com.facebook.react.soloader.OpenSourceMergedSoMapping
import com.facebook.soloader.SoLoader
import com.oblador.vectoricons.VectorIconsPackage
import com.rn_notifyvisitors.RNNotifyvisitorsModule

class MainApplication : Application(), ReactApplication {

    // Developer Team Live Testing Account Credential 👇🏻
//   private val NOTIFYVISITORS_BRAND_ENCRYPTION_KEY: String = "DB52A5B00BB0D3BF426639A1B9FCF2F7"
//   private val NOTIFYVISITORS_BRAND_ID: Int = 7577

// QA Team Live Testing Account Credential 👇🏻
  //  private val NOTIFYVISITORS_BRAND_ENCRYPTION_KEY: String = "515CBDE82C402BDD85E4DFCCFD8904F6"
  //  private val NOTIFYVISITORS_BRAND_ID: Int = 8115

    private val nvBrandID = if (BuildConfig.DEBUG) 7577 else 8115
    private val nvSecreKey = if (BuildConfig.DEBUG) "DB52A5B00BB0D3BF426639A1B9FCF2F7" else "515CBDE82C402BDD85E4DFCCFD8904F6"


  override val reactNativeHost: ReactNativeHost =
      object : DefaultReactNativeHost(this) {
        override fun getPackages(): List<ReactPackage> =
            PackageList(this).packages.apply {
              // Packages that cannot be autolinked yet can be added manually here, for example:
              // add(MyReactNativePackage())
              add(VectorIconsPackage())
            }

        override fun getJSMainModuleName(): String = "index"

        override fun getUseDeveloperSupport(): Boolean = BuildConfig.DEBUG

        override val isNewArchEnabled: Boolean = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED
        override val isHermesEnabled: Boolean = BuildConfig.IS_HERMES_ENABLED
      }

  override val reactHost: ReactHost
    get() = getDefaultReactHost(applicationContext, reactNativeHost)

  override fun onCreate() {
    super.onCreate()
      RNNotifyvisitorsModule.register(this, nvBrandID, nvSecreKey);
    SoLoader.init(this, OpenSourceMergedSoMapping)
    if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
      // If you opted-in for the New Architecture, we load the native entry point for this app.
      load()
    }
  }
}
