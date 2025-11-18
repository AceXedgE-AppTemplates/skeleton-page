
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export default function RootLayout() {
  return (
    <Tabs>
        <Tabs.Screen name='index'
          options={{
            headerTitle: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
            tabBarLabel: 'Home',
          }}
        />
        <Tabs.Screen name='book'
          options={{
            headerTitle: "Flight Booking",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="airplane" color={color} size={size} />
            ),
            tabBarLabel: 'Bookings',
          }}
        />
        <Tabs.Screen name='trip'
          options={{
            headerTitle: "Choose your trip",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="briefcase" color={color} size={size} />
            ),
            tabBarLabel: 'Trip',
          }}
        />
    </Tabs>
  )
}
