export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          name: string | null
          email: string | null
          avatar_url: string | null
          bio: string | null
          location: string | null
          birthdate: string | null
          phone: string | null
          instagram: string | null
          goals: string | null
          subscription_type: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          name?: string | null
          email?: string | null
          avatar_url?: string | null
          bio?: string | null
          location?: string | null
          birthdate?: string | null
          phone?: string | null
          instagram?: string | null
          goals?: string | null
          subscription_type?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string | null
          email?: string | null
          avatar_url?: string | null
          bio?: string | null
          location?: string | null
          birthdate?: string | null
          phone?: string | null
          instagram?: string | null
          goals?: string | null
          subscription_type?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      workouts: {
        Row: {
          id: string
          profile_id: string
          program_id: string | null
          week_number: number | null
          day_number: number | null
          start_time: string
          end_time: string | null
          total_volume: number | null
          total_reps: number | null
          notes: string | null
          created_at: string
        }
        Insert: {
          id?: string
          profile_id: string
          program_id?: string | null
          week_number?: number | null
          day_number?: number | null
          start_time?: string
          end_time?: string | null
          total_volume?: number | null
          total_reps?: number | null
          notes?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          profile_id?: string
          program_id?: string | null
          week_number?: number | null
          day_number?: number | null
          start_time?: string
          end_time?: string | null
          total_volume?: number | null
          total_reps?: number | null
          notes?: string | null
          created_at?: string
        }
      }
      workout_exercises: {
        Row: {
          id: string
          workout_id: string
          exercise_name: string
          sets: Json
          total_volume: number | null
          max_weight: number | null
          total_reps: number | null
          notes: string | null
          created_at: string
        }
        Insert: {
          id?: string
          workout_id: string
          exercise_name: string
          sets?: Json
          total_volume?: number | null
          max_weight?: number | null
          total_reps?: number | null
          notes?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          workout_id?: string
          exercise_name?: string
          sets?: Json
          total_volume?: number | null
          max_weight?: number | null
          total_reps?: number | null
          notes?: string | null
          created_at?: string
        }
      }
      program_weeks: {
        Row: {
          id: string
          program_id: string
          number: number
          title: string
          description: string | null
          difficulty: string | null
          created_at: string
        }
        Insert: {
          id?: string
          program_id: string
          number: number
          title: string
          description?: string | null
          difficulty?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          program_id?: string
          number?: number
          title?: string
          description?: string | null
          difficulty?: string | null
          created_at?: string
        }
      }
      program_days: {
        Row: {
          id: string
          week_id: string
          number: number
          title: string
          description: string | null
          created_at: string
        }
        Insert: {
          id?: string
          week_id: string
          number: number
          title: string
          description?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          week_id?: string
          number?: number
          title?: string
          description?: string | null
          created_at?: string
        }
      }
      program_exercises: {
        Row: {
          id: string
          day_id: string
          name: string
          sets: number
          reps: string
          rir: string | null
          rest: string | null
          video_url: string | null
          order_number: number
          created_at: string
        }
        Insert: {
          id?: string
          day_id: string
          name: string
          sets: number
          reps: string
          rir?: string | null
          rest?: string | null
          video_url?: string | null
          order_number: number
          created_at?: string
        }
        Update: {
          id?: string
          day_id?: string
          name?: string
          sets?: number
          reps?: string
          rir?: string | null
          rest?: string | null
          video_url?: string | null
          order_number?: number
          created_at?: string
        }
      }
      subscription_plans: {
        Row: {
          id: string
          name: string
          description: string | null
          price: number
          interval: string
          trial_days: number | null
          created_at: string
        }
        Insert: {
          id: string
          name: string
          description?: string | null
          price: number
          interval: string
          trial_days?: number | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          price?: number
          interval?: string
          trial_days?: number | null
          created_at?: string
        }
      }
      subscription_features: {
        Row: {
          id: string
          plan_id: string | null
          feature: string
          created_at: string
        }
        Insert: {
          id?: string
          plan_id?: string | null
          feature: string
          created_at?: string
        }
        Update: {
          id?: string
          plan_id?: string | null
          feature?: string
          created_at?: string
        }
      }
      subscriptions: {
        Row: {
          id: string
          profile_id: string
          plan_id: string | null
          status: string
          current_period_start: string
          current_period_end: string
          trial_end: string | null
          cancel_at_period_end: boolean | null
          created_at: string
          platform: string
          store_transaction_id: string | null
          auto_renewing: boolean
        }
        Insert: {
          id?: string
          profile_id: string
          plan_id?: string | null
          status: string
          current_period_start: string
          current_period_end: string
          trial_end?: string | null
          cancel_at_period_end?: boolean | null
          created_at?: string
          platform: string
          store_transaction_id?: string | null
          auto_renewing?: boolean
        }
        Update: {
          id?: string
          profile_id?: string
          plan_id?: string | null
          status?: string
          current_period_start?: string
          current_period_end?: string
          trial_end?: string | null
          cancel_at_period_end?: boolean | null
          created_at?: string
          platform?: string
          store_transaction_id?: string | null
          auto_renewing?: boolean
        }
      }
      body_metrics: {
        Row: {
          id: string
          profile_id: string
          date: string
          weight: number | null
          height: number | null
          body_fat: number | null
          muscle_mass: number | null
          visceral_fat: number | null
          bone_mass: number | null
          metabolic_age: number | null
          hydration: number | null
          created_at: string
        }
        Insert: {
          id?: string
          profile_id: string
          date?: string
          weight?: number | null
          height?: number | null
          body_fat?: number | null
          muscle_mass?: number | null
          visceral_fat?: number | null
          bone_mass?: number | null
          metabolic_age?: number | null
          hydration?: number | null
          created_at?: string
        }
        Update: {
          id?: string
          profile_id?: string
          date?: string
          weight?: number | null
          height?: number | null
          body_fat?: number | null
          muscle_mass?: number | null
          visceral_fat?: number | null
          bone_mass?: number | null
          metabolic_age?: number | null
          hydration?: number | null
          created_at?: string
        }
      }
      body_measurements: {
        Row: {
          id: string
          profile_id: string
          date: string
          neck: number | null
          shoulders: number | null
          chest: number | null
          left_arm: number | null
          right_arm: number | null
          left_forearm: number | null
          right_forearm: number | null
          waist: number | null
          abdomen: number | null
          hips: number | null
          left_thigh: number | null
          right_thigh: number | null
          left_calf: number | null
          right_calf: number | null
          created_at: string
        }
        Insert: {
          id?: string
          profile_id: string
          date?: string
          neck?: number | null
          shoulders?: number | null
          chest?: number | null
          left_arm?: number | null
          right_arm?: number | null
          left_forearm?: number | null
          right_forearm?: number | null
          waist?: number | null
          abdomen?: number | null
          hips?: number | null
          left_thigh?: number | null
          right_thigh?: number | null
          left_calf?: number | null
          right_calf?: number | null
          created_at?: string
        }
        Update: {
          id?: string
          profile_id?: string
          date?: string
          neck?: number | null
          shoulders?: number | null
          chest?: number | null
          left_arm?: number | null
          right_arm?: number | null
          left_forearm?: number | null
          right_forearm?: number | null
          waist?: number | null
          abdomen?: number | null
          hips?: number | null
          left_thigh?: number | null
          right_thigh?: number | null
          left_calf?: number | null
          right_calf?: number | null
          created_at?: string
        }
      }
      progress_photos: {
        Row: {
          id: string
          profile_id: string
          date: string
          type: string
          url: string
          created_at: string
        }
        Insert: {
          id?: string
          profile_id: string
          date?: string
          type: string
          url: string
          created_at?: string
        }
        Update: {
          id?: string
          profile_id?: string
          date?: string
          type?: string
          url?: string
          created_at?: string
        }
      }
    }
  }
}