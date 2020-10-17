package com.cecotectest.customDialogExample

import android.app.AlertDialog
import android.widget.Toast
import com.facebook.react.bridge.*
import com.facebook.react.uimanager.IllegalViewOperationException
import java.util.*

class DialogModule internal constructor(private var reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "DialogExample"
    }

    @ReactMethod
    fun show(message: String?, promise: Promise) {
        val map = Arguments.createMap()
        map.putString("result", "Clicked ok button")

        val alertDialog = AlertDialog.Builder(currentActivity).create()
        alertDialog.setTitle("Alert")
        alertDialog.setMessage(message ?: "")
        alertDialog.setButton(AlertDialog.BUTTON_NEUTRAL, "OK"
        ) { dialog, which ->
            dialog.dismiss()
            try {
                promise.resolve(map)
            } catch (e: IllegalViewOperationException) {
                promise.reject(E_LAYOUT_ERROR, e)
            }
        }
        alertDialog.show()
    }

    companion object {
        private const val E_LAYOUT_ERROR = "E_LAYOUT_ERROR"
    }
}